export default (httpMeth, url, opts) => {
  const meta = document.querySelector("meta[name='csrf-token']");
  const req = new XMLHttpRequest();
  req.withCredentials = opts.cookiesByCORS === true ? true : false;
  req.open(httpMeth, url);
  req.setRequestHeader("Accept", "application/json");
  if (meta) {
    req.setRequestHeader("X-CSRF-Token", meta.content);
  }
  if (opts.authorizationHeader != null) {
    req.setRequestHeader("Authorization", opts.authorizationHeader);
  }
  return req;
};
