import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { storage } from 'config/firebase';
import { uuidv4 } from '@firebase/util';
import {
  ref as firebaseRef,
  getDownloadURL,
  uploadBytes,
} from '@firebase/storage';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function BoardEditor({ initialValue, height = '400px' }, ref) {
  const uploadURL = `image/${uuidv4()}`;
  const editorRef = useRef();

  useImperativeHandle(ref, () => ({
    set: () => editorRef.current?.getInstance().getHTML(),
  }));

  useEffect(() => {
    if (editorRef.current) {
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
        hooks={{
          addImageBlobHook: (blob, callback) => {
            const imgs = firebaseRef(storage, uploadURL);
            uploadBytes(imgs, blob).then((data) => {
              getDownloadURL(data.ref)
                .then((imageUrl) => {
                  callback(imageUrl);
                })
                .catch((error) => {
                  alert('사진 업로드에 실패했습니다.');
                });
            });
          },
        }}
      />
    </>
  );
}

export default forwardRef(BoardEditor);
