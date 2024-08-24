
# HST Mobil Ödeme Sistemi

Bu proje, HST Mobil dokümanına uygun bir ödeme sistemi geliştirmek amacıyla hazırlanmıştır. Bu sistem temel olarak Node.js, Express.js kullanılarak sahte bir ödeme süreci ve sonuç kontrolü sunar.

## Kullanım

1. Proje dizininde `npm install` komutunu çalıştırarak gerekli bağımlılıkları yükleyin.
2. `npm start` komutuyla sunucuyu başlatın.
3. Postman veya benzeri bir araçla API uç noktalarını test edin.

## API Uç Noktaları

- **POST /payment**: Ödeme işlemini başlatır ve bir `transactionId` döner.
- **GET /payment/result**: Verilen `transactionId` ile ödeme durumunu kontrol eder.

## Gereksinimler

- Node.js
- Express.js

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
