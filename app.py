from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()


@app.get("/", response_class=HTMLResponse)
async def home():
    return """
    <html>
        <head>
            <title>Venqis</title>
        </head>
        <body style="background:#111;color:white;text-align:center;padding-top:100px;font-family:Arial;">
            <h1>Venqis</h1>
            <p>My first website is live 🚀</p>
        </body>
    </html>
    """
