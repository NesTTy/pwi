self.addEventListener("install", () => {
    return true;
  });
  
  self.addEventListener("activate", () => {
    return true;
  });
  
  self.addEventListener("sync", () => {
    return true;
  });
  
  self.addEventListener("fetch", () => {
    return true;
  });
  
  self.addEventListener("push", function (event) {
      
  });
  