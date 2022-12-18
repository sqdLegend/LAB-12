const articles = [
    {
      title: 'Title 1',
      description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',

    },
    {
      title: 'Title 2',
      description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
 
    },
    {
      title: 'Title 3',
      description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',

    },
    {
      title: 'Title 4',
      description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
 
    }
  ];
  
  const saveStorage = (param1) => {
    localStorage.setItem('history', JSON.stringify(param1));
  };
  
  
  const loadStorage = () => {
    let history = localStorage.getItem('history') || '';
    return JSON.parse(history);
  };
  
  window.addEventListener('load', () => {
    articles.forEach(article => {
      const a = document.createElement('article');
  
      const title = document.createElement('h5');
      title.innerText = article.title;
      a.appendChild(title);
  
      const description = document.createElement('span');
      description.innerText = article.description;
      a.appendChild(description);
  
      
  
      const container = document.getElementById('container');
      container.appendChild(a);
    });
  });
  
  function Create_article() {
    let title = document.getElementById('title');
    let description = document.getElementById('description');
;
    let articl = document.createElement('article');
    articl.className = 'myArticle';
  
    let h5 = document.createElement('h5');
    h5.innerText = title.value;
    articl.appendChild(h5);
  
    let span = document.createElement('p');
    span.innerText = description.value;
    articl.appendChild(span);
  
    let span2 = document.createElement('p');
  
    articl.appendChild(span2);
  
    let container = document.getElementById('container');
    container.appendChild(articl);
  
    saveStorage(container.innerHTML);
    
    articl.addEventListener('click', function () {
      articl.remove();
      saveStorage(container.innerHTML);
    })
  }
  
  window.onload = function (e) {
    
    let container = document.getElementById('container');
    container.innerHTML = loadStorage();
    setlistener_click();
  }
  
  function setlistener_click(){
    let articles2 = container.getElementsByClassName('myArticle');

    for(let i = 0; i < articles2.length; i++ ){
      articles2[i].addEventListener('click', function () {
        articles2[i].remove();
        saveStorage(container.innerHTML);

      })
    }
  }