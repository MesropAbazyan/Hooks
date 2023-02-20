import { useState, useEffect } from "react";

export default function(value) {
    // content is made in "App.js"
    const [data, setData] = useState();

    useEffect(() => {
      if (isFinite(value) && value > 0 && value <= 200 && !value.includes('.')) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${value}`)
          .then(stream => stream.json())
          .then(data => setData(data));
      }
    }, [value]);

    return data;
}