"use client";

import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-markdown-preview/markdown.css";
import "./post-viewer.css";
import useThemeStore from "@/store/store";

export default function PostViewer({ contents }: { contents: string }) {
  const { isDark } = useThemeStore();

  return (
    <div data-color-mode={isDark ? "dark" : ""}>
      <MDEditor.Markdown source={contents} className="mt-7 mb-10" />
    </div>
  );
}
