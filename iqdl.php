<?php
if (isset($_POST['url'])) {
    $url = $_POST['url'];
    $api_url = "https://api.siputzx.my.id/api/d/igdl?url=" . urlencode($url);

    $response = file_get_contents($api_url);
    $data = json_decode($response, true);
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram Downloader</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 90%;
            max-width: 500px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
        }
        input {
            width: 80%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            padding: 10px 20px;
            background: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .result img {
            width: 100%;
            max-width: 300px;
            margin-top: 10px;
            border-radius: 5px;
        }
        a {
            display: block;
            text-decoration: none;
            background: #007bff;
            color: white;
            padding: 10px;
            margin-top: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Instagram Video Downloader</h2>
        <form method="post">
            <input type="text" name="url" placeholder="Masukkan URL Instagram" required>
            <button type="submit">Download</button>
        </form>
        <?php if (isset($data) && $data['status']): ?>
            <div class="result">
                <h3>Hasil:</h3>
                <?php foreach ($data['data'] as $item): ?>
                    <img src="<?= $item['thumbnail'] ?>" alt="Thumbnail">
                    <a href="<?= $item['url'] ?>" download>Download Video</a>
                <?php endforeach; ?>
            </div>
        <?php elseif (isset($data)): ?>
            <p>Terjadi kesalahan, periksa URL yang dimasukkan.</p>
        <?php endif; ?>
    </div>
</body>
</html>
