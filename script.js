document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");

    const slideItems = document.querySelectorAll(".slide");

    const slideActive = document.querySelectorAll(".optionZ");

    const slideText = document.querySelectorAll(".text-slider");


    let currentIndex = 0;
  
    // Exibe o slide atual
    function showSlide(index) {
      // Garante que o índice esteja dentro do intervalo válido
      if (index < 0) {
        index = slideItems.length - 1;
      } else if (index >= slideItems.length) {
        index = 0;
      }
  
      // Remove a classe "active" de todos os slides
      slideItems.forEach(slide => {
        slide.classList.remove("active");
      });

      slideText.forEach(slide => {
        slide.classList.remove("activeText");
      });

      slideActive.forEach(slide => {
        slide.classList.remove("activeButton");
      });
  
      // Adiciona a classe "active" ao slide atual
      slideItems[index].classList.add("active");
      slideText[index].classList.add("activeText");
      slideActive[index].classList.add("activeButton");
      currentIndex = index;
    }
      
  
    // Adiciona evento de clique para o botão de próximo
    nextBtn.addEventListener("click", function() {
      showSlide(currentIndex + 1);
    });
  
    // Adiciona evento de clique para o botão de anterior
    prevBtn.addEventListener("click", function() {
      showSlide(currentIndex - 1);
    });
  
    // Exibe o primeiro slide ao carregar a página
    showSlide(currentIndex);


  const prevBtn2 = document.querySelector(".prevBtn-2");
  const nextBtn2 = document.querySelector(".nextBtn-2");
  const slideItems2 = document.querySelectorAll(".slide-2");
  const slideActive2 = document.querySelectorAll(".optionX");
  const slideText2 = document.querySelectorAll(".text-slider2");

  let currentIndex2 = 0;

  function showSlide2(index2) {
    // Garante que o índice esteja dentro do intervalo válido
    if (index2 < 0) {
      index2 = slideItems2.length - 1;
    } else if (index2 >= slideItems2.length) {
      index2 = 0;
    }

    // Remove a classe "active" de todos os slides
    slideItems2.forEach(slide2 => {
      slide2.classList.remove("active-2");
    });

    slideText2.forEach(slide2 => {
      slide2.classList.remove("activeText-2");
    });

    slideActive2.forEach(slide2 => {
      slide2.classList.remove("activeButton-2");
    });
    

    slideItems2[index2].classList.add("active-2");
    slideText2[index2].classList.add("activeText-2");
    slideActive2[index2].classList.add("activeButton-2");
    currentIndex2 = index2;
  }
    

  // Adiciona evento de clique para o botão de próximo
  nextBtn2.addEventListener("click", function() {
    showSlide2(currentIndex2 + 1);
  });

  // Adiciona evento de clique para o botão de anterior
  prevBtn2.addEventListener("click", function() {
    showSlide2(currentIndex2 - 1);
  });

  // Exibe o primeiro slide ao carregar a página

  showSlide2(currentIndex2);

});
