import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Gify(props) {
  return (
    <div fetchGify={props.fetchGif} className="mt-4">
      <img src={props.gify} alt="I'm Laughing" class="img-thumbnail" />
    </div>
  );
}
