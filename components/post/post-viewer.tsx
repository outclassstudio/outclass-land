"use client";

import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-markdown-preview/markdown.css";
import "./post-viewer.css";

export default function PostViewer({ contents }: { contents: string }) {
  return (
    <div data-color-mode="dark">
      <MDEditor.Markdown source={contents} className="mt-7 mb-10" />
    </div>
  );
}
