import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function BoardEditor({ initialValue, height = '400px' }, ref) {
  const editorRef = useRef();
  useImperativeHandle(ref, () => ({
    set: () => editorRef.current?.getInstance().getHTML(),
  }));

  useEffect(() => {
    if (!editorRef.current) return;

    if (editorRef.current) {
      console.log(editorRef);
      editorRef.current?.getInstance().focus();
      if (initialValue === '') {
        editorRef.current?.getInstance().reset();
      } else {
        editorRef.current?.getInstance().setHTML(initialValue);
      }
    }
  }, [editorRef, initialValue]);

  return (
    <>
      <Editor
        ref={editorRef}
        height={height}
        initialValue={initialValue}
        initialEditType="markdown"
        useCommandShortcut={true}
        usageStatistics={false}
        hideModeSwitch={true}
      />
    </>
  );
}

export default forwardRef(BoardEditor);
