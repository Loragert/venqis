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

        <body style="
            margin:0;
            background:#0f0f0f;
            color:white;
            font-family:Arial;
            text-align:center;
        ">

            <div style="padding-top:100px;">

                <h1 style="font-size:60px;margin-bottom:10px;">
                    Venqis
                </h1>

                <p style="font-size:24px;color:#aaa;">
                    Платформа для просування в соціальних мережах
                </p>

                <button style="
                    margin-top:30px;
                    padding:15px 35px;
                    font-size:18px;
                    border:none;
                    border-radius:10px;
                    background:#ffffff;
                    color:black;
                    cursor:pointer;
                ">
                    Почати
                </button>

            </div>


            <div style="margin-top:120px;">

                <h2>Платформи</h2>

                <p>
                    Instagram • TikTok • Telegram • Reddit
                </p>

            </div>


            <div style="margin-top:120px;padding-bottom:100px;">

                <h2>Як це працює</h2>

                <p>1. Оберіть послугу</p>
                <p>2. Створіть замовлення</p>
                <p>3. Отримайте активність</p>

            </div>

        </body>
    </html>
    """
