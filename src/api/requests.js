export const put = (url, id, obj) => () => fetch(`${url}/${id}`,{
  method: 'PUT',
  body: JSON.stringify(obj),
  headers: new Headers({'Content-type':'application/json'})
}).then(resolve => resolve.json());

export const asyncPatch = async (url, id, obj) => {
  const resolve = await fetch(`${url}/${id}`,{
    method: 'PATCH',
    body: JSON.stringify(obj),
    headers: new Headers({'Content-type':'application/json'})
  });

  const response = await resolve.json();
  return response;
}

export const post = (url, obj) => () => fetch(url,{
  method: 'POST',
  body: JSON.stringify(obj),
  headers: new Headers({'Content-type':'application/json'})
}).then(response => response.json());

export const patch = (url, id, newProperty) => () => fetch(`${url}/${id}`, {
  method: 'PATCH',
  body: JSON.stringify(newProperty),
  headers: new Headers({'Content-type':'application/json'})
}).then(resolve => resolve.json());

  export const del = (url, id) => () => fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: new Headers({'Content-type':'application/json'})
  });
