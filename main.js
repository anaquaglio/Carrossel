var motivos = [
    " O elenco é incrível",
    "O casal mais impossivel",
    "E o melhor casal",
    "É  o melhor personagem",
      "é uma história que marcou gerações"
  ];
  
  var imagens = [ "https://noticiasdatv.uol.com.br/media/uploads/artigos_2021/elenco-carrossel-criancas-antes-depois-por-onde-anda-sbt-1905.jpg",
    "https://i0.wp.com/blackbraziltoday.com/wp-content/uploads/2018/05/politicizing-of-the-affections-makes-itself-necessary-cirilo-maria-joaquina-carro2.jpg?resize=600%2C381&ssl=1",
    "https://i.pinimg.com/736x/d7/3e/36/d73e364d6cb16f91191e5a494561933d.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCntTEznuvlTVCicK1toOYz-5k7B19-XRfGB7E6cilEvqSyyIOYdLhZzRV93UI2DlZi8U&usqp=CAU",         "https://static1.purepeople.com.br/articles/9/22/39/@/17383-carrossel-624x600-1.jpg"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }