import { serve } from "./deps.js"
import { configure, renderFile } from "./deps.js";
import * as messageService from "./services/messageService.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const redirectTo = (path) => {
  return new Response(`Redirecting to ${path}.`, {
    status: 303,
    headers: {
      "Location": path,
    },
  });
};

const showMessage = async () => {
  const data = {
    messages: await messageService.getMessage(), 
  };
  return new Response(await renderFile("index.eta", data), responseDetails);
}; 

const addMessage = async (request) => {
  const formData = await request.formData(); 
  
  const sender = formData.get("sender");
  const message = formData.get("message");

  await messageService.addMessage(sender, message);
  
  return redirectTo("/");
}

const handleRequest = async (request) => {
  const url = new URL(request.url);

  if (request.method === "GET") {
    return await showMessage();
  } else if (request.method === "POST") {
    return await addMessage(request);
  } 
  
  return redirectTo("/");

};

serve(handleRequest, { port: 7777 });
