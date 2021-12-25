function loadScript(path, callback) {
  const script = document.createElement('script');

  script.src = path;
  script.onload = callback;

  document.body.appendChild(script);
}

function loadScript(pathOrCallback, callback) {
  const script = document.createElement('script');

  script.src = path;

  if( typeof pathOrCallback === 'function'){
    
    script.onload = pathOrCallback;
  } else {
    script.onload = callback;
  }
  

  document.body.appendChild(script);
}