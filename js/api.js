
const RESOURCE_URL = `http://localhost:8080/stadiums`

const loader = document.getElementById("loader");

const baseRequest = async ({urlPath = "", method = "GET", body = null}) => {
  try {
    loader.classList.remove("d-none");
    const reqParams = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    }

    if (body) {
      reqParams.body = JSON.stringify(body)
    }

    return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams)
  } catch (error) {

  } finally {
    loader.classList.add("d-none");
  }
}

export const get_Stadiums = async () => {
  const rawResp = await baseRequest({method: 'GET'});

  return rawResp.json();
}

export const post_Stadiums = async (body) => {
  const rawResp = await baseRequest({method: 'POST', body});

  return rawResp.json();
}

export const put_Stadiums = async (id, body) => {
  const rawResp = await baseRequest({urlPath: `/${id}`, method: 'PUT', body});

  return rawResp.json();
}
export const delete_Stadium = async (id) => {
  const rawResp = await baseRequest({urlPath: `/${id}`, method: 'DELETE'});

  return rawResp.json();
}
