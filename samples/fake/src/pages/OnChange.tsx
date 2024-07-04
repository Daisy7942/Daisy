import type { ChangeEvent } from "react";

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("onChangeValue", e.target.value);
  };

  const onChangeCheckded = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeChecked", e.target.value);
  };

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeFiles", e.target.value);
  };

  return (
    <div>
      <p> Onchange</p>
      <div>
        <input
          type="text"
          onChange={onChangeValue}
          placeholder="type some text"
          defaultValue="Hello"
        />
        <input type="checkbox" onChange={onChangeCheckded} defaultChecked />
        <input
          type="file"
          onChange={onChangeFiles}
          multiple
          accept="images/*"
        />
      </div>
    </div>
  );
  <div>CopyMe</div>;
}
