# mime_ai/Main/utils/assemblyai_transcriber.py

import requests
import time
import os
from dotenv import load_dotenv
load_dotenv()

ASSEMBLYAI_API_KEY = os.getenv("ASSEMBLYAI_API_KEY")
print(ASSEMBLYAI_API_KEY)

upload_endpoint = "https://api.assemblyai.com/v2/upload"
transcript_endpoint = "https://api.assemblyai.com/v2/transcript"

headers = {
    "authorization": ASSEMBLYAI_API_KEY,
    "content-type": "application/json"
}

def upload_audio(file_path):
    import os
    import mimetypes
    file_size = os.path.getsize(file_path)
    content_type, _ = mimetypes.guess_type(file_path)
    print(f"Uploading file: {file_path}, size: {file_size} bytes, content_type: {content_type}")
    with open(file_path, 'rb') as f:
        response = requests.post(
            upload_endpoint, 
            headers={"authorization": ASSEMBLYAI_API_KEY}, 
            files={"file": (os.path.basename(file_path), f, content_type)}
        )
    print(f"Upload response status: {response.status_code}")
    if response.status_code != 200:
        print(f"Upload error: {response.text}")
    response.raise_for_status()
    return response.json()['upload_url']

def transcribe_audio(file_path):
    upload_url = upload_audio(file_path)

    transcript_request = {
        "audio_url": upload_url,
        "speech_models": ["universal-2"]
    }

    transcript_response = requests.post(transcript_endpoint, json=transcript_request, headers=headers)
    
    if transcript_response.status_code != 200:
        error_msg = transcript_response.json()
        raise Exception(f"AssemblyAI API error: {error_msg}")
    
    transcript_data = transcript_response.json()
    if 'id' not in transcript_data:
        raise Exception(f"AssemblyAI response missing 'id': {transcript_data}")
    
    transcript_id = transcript_data['id']

    # Polling until transcription is complete
    while True:
        polling_response = requests.get(f"{transcript_endpoint}/{transcript_id}", headers=headers)
        status = polling_response.json()['status']

        if status == 'completed':
            return polling_response.json()['text']
        elif status == 'error':
            raise Exception(f"Transcription failed: {polling_response.json()['error']}")
        
        time.sleep(3)  # wait before polling again
