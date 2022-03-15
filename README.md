# OMDB Film Api Uygulaması

Bu, https://www.omdbapi.com api vasıtasıyla, web sayfamızda film araması yaparak filmlere erişmemizi sağlayan mobil uyumlu bir web uygulamasıdır.

## Uygulamayı Çalıştırma

Aşağıdaki komutla projeyi klonlayın.

    git clone https://github.com/bgryks18/omdb-film-api.git

Ve proje klasörüne geçin

    cd omdb-film-api

Uygulamanın çalışabilmesi için gerekli paketlerin kurulu olması gerekir.
Aşağıdaki komut ile uygulamanın bağımlı olduğu paketlerin hepsi kurulur

    npm install

## Uygulamayı Test Etme

    npm start

komutu ile uygulamayı çalıştırın ve sunucu adresinizi tarayıcıda açın.
Web sayfanız açıldığında aramak istediğiniz kelimeyi kutucuğa yazın ve formu submit edin.
Tasarım, form alanının hemen altına ilk 4 tane sonuç gelecek şekilde hazırlandı.
Eğer aradığınız kelimeyle filmler varsa, ilk 4 tanesi hemen form kutucuğunun altında size listelenecektir.
Devamını görmek için ise View All linkine tıklayarak sonuçla eşleşen bütün filmleri görebilirsiniz.
Filmlerin üstüne tıklayarak ise film hakkındaki detay sayfasına gidebilirsiniz.

## Uygulama Nasıl Çalışıyor

https://www.omdbapi.com/?apikey=APIKEY&s=KEYWORD
şeklinde basit bir film araması yapmamızı sağlıyor.
https://www.omdbapi.com üzerinden daha farklı parametreleri bulup kendi isteğinize göre kullanabilirsiniz.

## Resimler Hakkında

Bu bir örnek restapi olduğu için bazı filmlerin api'den gelen resim bilgileri eksik gelebiliyor ve imdb ID'si ile imdb'de gözatmak istediğimizde film kaldırılmış olabiliyor.
