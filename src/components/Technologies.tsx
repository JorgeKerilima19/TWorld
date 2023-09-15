import reactLogo from "/react.svg";
import vueLogo from "/vue.svg";
import nodeLogo from "/node.svg";
import typeScriptLogo from "/typeScript.svg";
import youtubeLogo from "/youtube.svg";
import instagramLogo from "/instagram.svg";
import twitterLogo from "/twitter.svg";

import dribbleLogo from "/dribble.svg";

export const Technologies = () => {
  return (
    <div className="absolute top-5 md:top-auto flex gap-5 justify-center md:justify-between w-full md:bottom-5 flex-wrap">
      <div className="flex gap-5 flex-wrap">
        <img className="w-8" src={dribbleLogo} alt="react" />
        <img className="w-8" src={youtubeLogo} alt="react" />
        <img className="w-8" src={instagramLogo} alt="react" />
        <img className="w-8" src={twitterLogo} alt="react" />
      </div>

      <div className="flex gap-5 flex-wrap">
        <img className="w-8" src={reactLogo} alt="react" />
        <img className="w-8" src={vueLogo} alt="react" />
        <img className="w-8" src={nodeLogo} alt="react" />
        <img className="w-8" src={typeScriptLogo} alt="react" />
      </div>
    </div>
  );
};
