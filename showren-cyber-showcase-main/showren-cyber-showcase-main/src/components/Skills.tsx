import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Custom logo SVG icons for all skills
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.67-3.13 8.42-7 9.88-3.87-1.45-7-5.2-7-9.88v-4.7l7-3.12z"/>
    <path fill="currentColor" d="M12 6a2 2 0 0 0-2 2v4a2 2 0 0 0 4 0V8a2 2 0 0 0-2-2z"/>
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M8.7 15.9L4.8 12l3.9-3.9c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-4.6 4.6c-.4.4-.4 1 0 1.4l4.6 4.6c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4zM15.3 15.9l3.9-3.9-3.9-3.9c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l4.6 4.6c.4.4.4 1 0 1.4l-4.6 4.6c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4z" />
  </svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
  </svg>
);

const PHPIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M12 2c-.4 0-.7.2-.9.6L4.6 13.2c-.2.3-.2.7 0 1L7 19.5c.2.3.5.5.9.5h8.3c.3 0 .7-.2.9-.5l2.4-5.3c.2-.3.2-.7 0-1L12.9 2.6c-.2-.4-.5-.6-.9-.6zm-.7 5.7h1.5c.7 0 1.2.1 1.5.3.3.2.4.6.3 1.1 0 .3-.1.5-.2.8-.1.2-.2.4-.4.6-.2.2-.5.3-.8.4-.3.1-.7.1-1.2.1h-.7l-.2.8h-1.3l1.5-4.1zm-4.6 0h1.5c.7 0 1.2.1 1.5.3.3.2.4.6.3 1.1 0 .3-.1.5-.2.8-.1.2-.2.4-.4.6-.2.2-.5.3-.8.4-.3.1-.7.1-1.2.1H7l-.2.8H5.5l1.2-4.1zm6.2.9h-.4l-.3.7h.3c.3 0 .4 0 .6-.1.1 0 .2-.2.2-.3 0-.1 0-.2-.1-.2-.1-.1-.2-.1-.3-.1zm-6.2 0h-.4l-.3.7h.3c.3 0 .4 0 .6-.1.1 0 .2-.2.2-.3 0-.1 0-.2-.1-.2 0-.1-.1-.1-.3-.1z"/>
  </svg>
);

const LaravelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 text-accent">
    <path fill="currentColor" d="M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54,8.39,8.39,0,0,0,.94.31,9.91,9.91,0,0,0,1.08.22,9.35,9.35,0,0,0,1.2.1,9.94,9.94,0,0,0,1.2-.1,9.74,9.74,0,0,0,1.08-.22,9.14,9.14,0,0,0,.94-.31,8.6,8.6,0,0,0,1.32-.54L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39Z" />
  </svg>
);

const SymfonyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-accent">
    <path fill="currentColor" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-12 .213c.178.009.26-.093.145-.244-.118-.15-.118-.373-.005-.54.113-.166.13-.448.013-.626-.118-.178-.13-.48-.024-.673.117-.194.57-.35.978-.35.41 0 .83.211.947.47.117.258.132.683.034.946-.097.262-.388.694-.647.96-.26.267-.607.772-.775 1.124-.17.35-.26.683-.2.741.06.058.26-.05.445-.243.185-.194.336-.62.336-.95s.15-.675.332-.777c.182-.1.418-.056.524.098.107.155.15.65.096 1.1-.056.45-.34.813-.632.813-.291 0-.774.167-1.075.368-.301.201-.774.367-1.05.367s-.634-.128-.767-.285c-.132-.157-.22-.582-.196-.947.023-.365.177-.825.341-1.025.164-.2.506-.75.76-1.225.253-.474.484-.863.514-.862.03 0 .134.184.23.41.096.227.182.342.192.256.009-.087-.069-.394-.173-.683-.103-.29-.152-.626-.107-.747.044-.12.148-.03.231.197.084.23.214.507.29.617.076.11.138.072.138-.088 0-.16-.13-.425-.291-.59-.16-.164-.292-.422-.292-.573s.196-.202.434-.084c.239.117.525.318.636.446.11.127.219.12.24-.016.022-.136-.106-.368-.284-.516-.178-.148-.324-.392-.324-.542 0-.15.112-.2.248-.11.136.09.422.27.636.4.214.132.41.144.434.027.025-.117-.067-.385-.205-.594-.138-.21-.195-.413-.128-.455.068-.042.296.084.508.281.212.198.478.459.592.582.114.122.22.09.236-.072s-.062-.494-.189-.764c-.127-.27-.184-.492-.126-.493z" />
  </svg>
);

const NodejsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.027.129-.016.185.021l1.873 1.106c.074.037.166.037.234 0l7.28-4.197c.074-.044.115-.127.115-.215V7.752c0-.088-.045-.171-.115-.215L12.13 3.345c-.074-.042-.17-.042-.234 0L4.616 7.537c-.074.043-.115.131-.115.215v8.385c0 .088.045.171.115.214l1.994 1.151c1.079.537 1.744-.096 1.744-.734V8.463c0-.117.098-.211.217-.211h.915c.118 0 .217.094.217.211v8.304c0 1.433-.783 2.255-2.145 2.255-.422 0-.752 0-1.674-.45l-1.901-1.096c-.473-.277-.771-.792-.771-1.339V7.752c0-.55.293-1.064.771-1.339l7.277-4.197c.463-.264 1.077-.264 1.539 0l7.28 4.197c.47.275.769.789.769 1.339v8.385c0 .547-.299 1.062-.769 1.338l-7.28 4.197c-.237.136-.499.204-.774.204zm2.258-5.726c-3.177 0-3.846-.459-3.846-1.429 0-.117.098-.211.217-.211h.933c.107 0 .197.074.213.179.147.994.578 1.457 2.483 1.457 1.525 0 2.177-.346 2.177-1.15 0-.46-.184-.808-2.555-1.039-1.982-.193-3.203-.633-3.203-2.215 0-1.459 1.235-2.328 3.301-2.328 2.323 0 3.473.801 3.62 2.533.006.058-.013.113-.049.155-.036.038-.086.063-.143.063h-.936c-.101 0-.192-.072-.211-.171-.23-1.022-.862-1.35-2.281-1.35-1.678 0-1.875.58-1.875 1.016 0 .532.232.684 2.476.99 2.225.301 3.289.73 3.289 2.25-.005 1.58-1.328 2.477-3.647 2.477z" />
  </svg>
);

const ExpressIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-accent">
    <path fill="currentColor" d="M24 18.588a1.53 1.53 0 01-1.543 1.543H1.543A1.54 1.54 0 010 18.586V5.414a1.54 1.54 0 011.543-1.543h20.914A1.53 1.53 0 0124 5.414v13.174zm-2.57-5.8H17.35a.95.95 0 00-.814.471L16.122 14c-.264.451-.486.753-.839.797l-3.989-.001a.873.873 0 00-.85-.61h-4.01a.873.873 0 00-.85.61H.532a.52.52 0 00-.318.948l4.905 4.668c.302.287.665.51 1.1.639l8.839-.001c.573 0 1.104-.323 1.395-.833l4.862-8.676a.526.526 0 00-.445-.79zm-17.952.49l2.132-4.085c.117-.215.334-.348.576-.348h5.407c.241 0 .462.133.576.348l2.133 4.085H3.479z" />
  </svg>
);

const PythonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" />
  </svg>
);

const CSharpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM9.5 15.5c-1.657 0-3-1.343-3-3s1.343-3 3-3H12v1.5H9.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5H12v1.5H9.5zm8.421-3c0 1.657-1.344 3-3 3h-2.5v-1.5h2.5c.828 0 1.5-.673 1.5-1.5s-.672-1.5-1.5-1.5H12V9.5h2.921c1.656 0 3 1.344 3 3zm-1.421-1.5v3h-1.5v-3h-3v-1.5h3v-3h1.5v3h3v1.5h-3z" />
  </svg>
);

const SQLIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M12 2C6.477 2 2 3.79 2 6v12c0 2.21 4.477 4 10 4s10-1.79 10-4V6c0-2.21-4.477-4-10-4zm0 2c4.412 0 8 1.243 8 2s-3.588 2-8 2-8-1.243-8-2 3.588-2 8-2zm0 16c-4.412 0-8-1.243-8-2V8.954C5.456 9.89 8.486 10.5 12 10.5s6.544-.61 8-1.546V18c0 .757-3.588 2-8 2z" />
  </svg>
);

const BashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M3.2 8h.5v11.7H8V11h4.7v8.7h4.3V8h.5c.5 0 .9-.4.9-.9v-.9c0-.5-.4-.9-.9-.9H3.2c-.5 0-.9.4-.9.9v.9c0 .5.4.9.9.9zm5.5 0 3.3-.1c.2 0 .4-.1.6-.2l1.2-1.2c.2-.2.3-.4.3-.6V4.6c0-.2-.1-.4-.3-.6l-1.2-1.2c-.2-.2-.4-.3-.6-.3H8.7c-.2 0-.4.1-.6.3L6.9 4c-.2.2-.3.4-.3.6v1.3c0 .2.1.4.3.6l1.2 1.2c.2.2.4.3.6.3z" />
  </svg>
);

const PowerShellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M23.181 2.974c.568 0 .923.463.784.987l-3.659 14.94c-.14.524-.705.944-1.266.944H.79c-.569 0-.924-.463-.784-.987l3.659-14.94c.14-.524.706-.944 1.266-.944h18.25zm-4.511 3.958a.61.61 0 0 0-.235.098l-8.862 6.378a.299.299 0 0 0-.061.481l5.327 4.2a.611.611 0 0 0 .758 0l.326-.218a.632.632 0 0 0 .164-.777l-3.334-4.416 5.346-3.049a.632.632 0 0 0 .227-.864l-.227-.375a.61.61 0 0 0-.43-.276z" />
  </svg>
);

const DockerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" />
  </svg>
);

const RabbitMQIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M11.8 4.613c0 .604.123 1.185.342 1.72H3.84v11.24h16.32v-11.24h-4.89a5.424 5.424 0 0 0 .343-1.72h5.548a1 1 0 0 1 1 1v12.96a1 1 0 0 1-1 1H2.839a1 1 0 0 1-1-1V5.613a1 1 0 0 1 1-1h8.96zM4.68 8.792h14.64V9.8H4.68v-1.01zm9.981-1.935a1.935 1.935 0 1 1 0-3.87 1.935 1.935 0 0 1 0 3.87z" />
  </svg>
);

const InsomniaTIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.6c-5.304 0-9.6-4.298-9.6-9.6 0-5.304 4.298-9.6 9.6-9.6 5.304 0 9.6 4.298 9.6 9.6 0 5.304-4.298 9.6-9.6 9.6zm0-16.8c-3.924 0-7.2 3.276-7.2 7.2s3.276 7.2 7.2 7.2 7.2-3.276 7.2-7.2-3.276-7.2-7.2-7.2zm0 13.2c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6z" />
  </svg>
);

const PostmanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M10.5 12.526a2.04 2.04 0 0 1 2.973-1.828 1.962 1.962 0 0 1 1.173 1.842c0 .787-.399 1.518-1.145 1.803s-1.587.078-2.146-.51a1.985 1.985 0 0 1-.855-1.307m7.824-5.965l-2.263 2.205L14.43 7.93l.324-1.876 3.57 .507zm1.237-1.236l-3.728-.53a.504.504 0 0 0-.568.427l-.326 1.878-2.243.562L12 7.33a.504.504 0 0 0-.699.006L7.693 10.95A6.228 6.228 0 0 0 2.142 17.1v.03A6.27 6.27 0 0 0 8.4 23.382a6.227 6.227 0 0 0 6.345-5.244 6.175 6.175 0 0 0-2.882-6.458l2.046-1.989L14.952 6.3l1.876-.325a.504.504 0 0 0 .426-.569l-.53-3.727a.504.504 0 0 0-.83-.285l-4.11 4.11a7.145 7.145 0 0 0-8.234 1.248.504.504 0 0 0 .711.713 6.156 6.156 0 0 1 7.469-.773L8.229 9.242a.505.505 0 0 0 .01.715l3.371 3.372a.504.504 0 0 0 .715.01l2.438-2.373a5.177 5.177 0 0 1 2.41 5.605A5.217 5.217 0 0 1 8.49 22.36c-2.869.041-5.246-2.278-5.287-5.148v-.025a5.216 5.216 0 0 1 5.192-5.239 5.151 5.151 0 0 1 3.457 1.319l-.679.659a.504.504 0 0 0-.011.714 2.97 2.97 0 0 1 .893 2.153 2.976 2.976 0 0 1-5.1 2.076c-1.112-1.112-1.27-2.867-.377-4.172a2.976 2.976 0 0 1 4.172-.377.504.504 0 0 0 .714-.011l.682-.663a5.142 5.142 0 0 1 1.242 3.348 5.217 5.217 0 0 1-6.267 5.145 5.222 5.222 0 0 1-4.153-5.622 5.226 5.226 0 0 1 5.912-4.433.504.504 0 0 0 .444-.847.505.505 0 0 0-.362-.153 6.223 6.223 0 0 0-6.843 5.807 6.211 6.211 0 0 0 5.428 6.635 6.221 6.221 0 0 0 6.934-5.029 6.153 6.153 0 0 0-1.535-5.56l2.255-2.19 2.77 3.345a.504.504 0 0 0 .783-.62l-3.111-3.754 2.202-2.14a.504.504 0 0 0-.053-.764z" />
  </svg>
);

const GitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
  </svg>
);

const M365Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M21.53 4.306v15.363q0 .807-.472 1.433-.472.627-1.253.85l-6.888 1.974q-.136.037-.29.055-.156.019-.293.019-.396 0-.72-.105-.321-.106-.656-.292l-4.505-2.544q-.248-.137-.391-.366-.143-.23-.143-.515 0-.434.304-.738.304-.305.739-.305h5.831V4.964l-4.38 1.563q-.533.187-.856.658-.322.472-.322 1.03v8.078q0 .496-.248.912-.25.416-.683.651l-2.072 1.13q-.286.148-.571.148-.497 0-.844-.347-.348-.347-.348-.844V6.563q0-.62.33-1.19.328-.571.874-.881L20.448 0q.248-.136.534-.21.285-.075.57-.075.59 0 1.025.435.436.435.436 1.026v3.13zm-2.174.357v13.069l-5.443 1.732V6.634l5.443-1.971z"/>
  </svg>
);

const AzureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M13.05 4.24L6.56 18.05L2 18l5.09-8.76l5.96-5m.7 1.09L22 19.76H18.73l-9.18-14.5z" />
  </svg>
);

const JiraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M11.571 11.513H0a5.208 5.208 0 0 0 5.208 5.2h1.88v1.834a5.213 5.213 0 0 0 5.213 5.212V12.206a.693.693 0 0 0-.73-.693zM17.445 0a5.205 5.205 0 0 0-5.212 5.2v1.865h-1.88a5.212 5.212 0 0 0-5.212 5.212h11.576a.694.694 0 0 0 .694-.693V5.2h1.838A5.209 5.209 0 0 0 24 0h-6.555z"/>
    <path fill="currentColor" d="M5.208 6.865A5.214 5.214 0 0 0 0 12.077v11.58h11.571a.693.693 0 0 0 .694-.694v-6.363h-7.057V6.864z" fill-opacity=".4"/>
  </svg>
);

const NetworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
  </svg>
);

const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z" />
  </svg>
);

const BugIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z" />
  </svg>
);

const TerminalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4-4 4z" />
  </svg>
);

const ArrowRightLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const DatabaseBackupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.31 0 6 1.12 6 2s-2.69 2-6 2-6-1.12-6-2 2.69-2 6-2zm0 16c-3.31 0-6-1.12-6-2V11.61C7.22 12.5 9.36 13 12 13c2.64 0 4.78-.5 6-1.39v6.78c0 .88-2.69 2-6 2zm0-6c-3.31 0-6-1.12-6-2V7.61C7.22 8.5 9.36 9 12 9c2.64 0 4.78-.5 6-1.39v4.78c0 .88-2.69 2-6 2z" />
  </svg>
);

const CICDIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M21.5 3.5l-6 1.5v13.8l6 1.7V3.5zM8.5 3.5v3H7c-1.24 0-2.25 1-2.25 2.24v7c0 1.24 1 2.25 2.24 2.25h1.24v3h2v-3H11c1.24 0 2.25-1 2.25-2.24v-7C13.24 7.5 12.25 6.5 11 6.5H8.5v-3h-2zm8.7 2v12.5l2 .5V5l-2 .5zM3.7 8.3C2.4 8.3 1.3 9.4 1.3 10.7v2.3c0 1.3 1.1 2.4 2.4 2.4h2.3c.6 0 1.1-.5 1.1-1.1v-4.8c0-.6-.5-1.1-1.1-1.1H3.7zm.6 1.9h1.2v2.1H4.3v-2.1zm5 .3h.7v3.5H9.3v-3.5z" />
  </svg>
);

const WiresharkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-accent">
    <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-5 6a1 1 0 0 0-.99 1.12c.274 2.42 1.516 4.55 3.32 5.92a1.016 1.016 0 0 0 1.27-.15 1 1 0 0 0-.08-1.41A6.005 6.005 0 0 1 8.11 11.1 1 1 0 0 0 7 10zm10 0a1 1 0 0 0-1.11 1.1 6.005 6.005 0 0 1-2.41 4.38 1 1 0 0 0-.08 1.41 1.016 1.016 0 0 0 1.27.15c1.804-1.37 3.046-3.5 3.32-5.92A1 1 0 0 0 17 10zm-5-4a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1zm0 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
  </svg>
);

const Skills = () => {
  const phpSubSkills = [
    { name: "Laravel", icon: <LaravelIcon /> },
    { name: "Symfony", icon: <SymfonyIcon /> }
  ];
  
  const nodeSubSkills = [
    { name: "ExpressJs", icon: <ExpressIcon /> }
  ];

  const technicalSkills = [
    { name: "Threat Detection & Incident Response", icon: <ArrowRightLeftIcon /> },
    { name: "Malware Analysis", icon: <BugIcon /> },
    { name: "Network Security & Traffic Analysis", icon: <NetworkIcon /> },
    { name: "Security Hardening & Compliance", icon: <LockIcon /> },
    { name: "SOC Operations", icon: <CpuIcon /> },
    { name: "Vulnerability & Risk Assessment", icon: <BugIcon /> },
  ];

  const securityTools = [
    { name: "YARA", icon: <TargetIcon /> },
    { name: "Wireshark", icon: <WiresharkIcon /> }, // Updated here
    { name: "Suricata", icon: <NetworkIcon /> },
    { name: "Splunk", icon: <DatabaseBackupIcon /> },
    { name: "CrowdStrike", icon: <ShieldIcon /> },
    { name: "Metasploit", icon: <CodeIcon /> },
    { name: "Nmap", icon: <TerminalIcon /> },
    { name: "Burp Suite", icon: <BugIcon /> },
  ];
  
  const programmingSkills = [
    { name: "Python", icon: <PythonIcon /> },
    { name: "PHP", icon: <PHPIcon />, subSkills: phpSubSkills },
    { name: "NodeJs", icon: <NodejsIcon />, subSkills: nodeSubSkills },
    { name: "C#", icon: <CSharpIcon /> },
    { name: "SQL", icon: <SQLIcon /> },
    { name: "Bash", icon: <BashIcon /> },
    { name: "PowerShell", icon: <PowerShellIcon /> },
  ];

  const platforms = [
    { name: "Docker", icon: <DockerIcon /> },
    { name: "AWS", icon: <CloudIcon /> },
    { name: "Git", icon: <GitIcon /> },
    { name: "Microsoft 365", icon: <M365Icon /> },
    { name: "Azure", icon: <AzureIcon /> },
    { name: "Jira", icon: <JiraIcon /> },
    { name: "RabbitMQ", icon: <RabbitMQIcon /> },
    { name: "Insomnia", icon: <InsomniaTIcon /> },
    { name: "Postman", icon: <PostmanIcon /> },
    { name: "CI/CD Pipeline", icon: <CICDIcon /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-background animated-bg relative overflow-hidden">
      <div className="floating-particle" style={{ width: "90px", height: "90px", top: "15%", right: "20%", opacity: 0.05, animationDuration: "50s" }}></div>
      <div className="floating-particle" style={{ width: "45px", height: "45px", bottom: "25%", left: "25%", opacity: 0.08, animationDuration: "32s" }}></div>
      
      <div className="container px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            variants={itemVariants}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-accent mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p 
            className="max-w-3xl mx-auto text-lg text-white/80"
            variants={itemVariants}
          >
            My technical skills, tools, and technologies that I've mastered throughout my cybersecurity career.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Cybersecurity & Threat Intelligence Card */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card border-accent/30 h-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-background/0 pointer-events-none" />
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 glow-animation">
                    <ShieldIcon />
                  </div>
                </div>
                <CardTitle className="text-center text-accent">Cybersecurity & Threat Intelligence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {technicalSkills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex items-center px-3 py-2 bg-background/30 rounded-md border border-accent/10 hover:border-accent/30 transition-colors duration-200 group animate-fadeInUp"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-accent/10 glow-animation mr-3">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Security Tools Card */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card border-accent/30 h-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-background/0 pointer-events-none" />
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 glow-animation">
                    <WrenchIcon />
                  </div>
                </div>
                <CardTitle className="text-center text-accent">Security Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {securityTools.map((tool, index) => (
                    <div 
                      key={index} 
                      className="flex items-center px-3 py-2 bg-background/30 rounded-md border border-accent/10 hover:border-accent/30 transition-colors duration-200 group animate-fadeInUp"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-accent/10 glow-animation mr-3">
                        {tool.icon}
                      </div>
                      <span className="font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Programming and Scripting Card */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card border-accent/30 h-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-background/0 pointer-events-none" />
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 glow-animation">
                    <CodeIcon />
                  </div>
                </div>
                <CardTitle className="text-center text-accent">Programming and Scripting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {programmingSkills.map((skill, index) => (
                    <div 
                      key={index}
                      className="bg-background/30 rounded-md border border-accent/10 hover:border-accent/30 transition-colors duration-200 group animate-fadeInUp overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center px-3 py-2">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-accent/10 glow-animation mr-3">
                          {skill.icon}
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      
                      {/* Subskills rendered inside the parent card */}
                      {skill.subSkills && (
                        <div className="grid grid-cols-2 gap-2 px-3 pb-2 mt-1 border-t border-accent/10 pt-2 bg-background/40">
                          {skill.subSkills.map((subSkill, subIndex) => (
                            <div 
                              key={subIndex} 
                              className="flex items-center px-2 py-1 bg-background/40 rounded-md border border-accent/10 hover:border-accent/20 transition-colors duration-200"
                            >
                              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-accent/10 mr-2">
                                {subSkill.icon}
                              </div>
                              <span className="text-sm font-medium">{subSkill.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Platforms and Tools Card */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card border-accent/30 h-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-background/0 pointer-events-none" />
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 glow-animation">
                    <CloudIcon />
                  </div>
                </div>
                <CardTitle className="text-center text-accent">Platforms and Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {platforms.map((platform, index) => (
                    <div 
                      key={index} 
                      className="flex items-center px-3 py-2 bg-background/30 rounded-md border border-accent/10 hover:border-accent/30 transition-colors duration-200 group animate-fadeInUp"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-accent/10 glow-animation mr-3">
                        {platform.icon}
                      </div>
                      <span className="font-medium">{platform.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;