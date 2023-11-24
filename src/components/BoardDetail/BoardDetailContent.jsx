import React from 'react';

import {
  StImg,
  StContent,
  StTitle,
  StAllContent,
  StBtn,
  StAllContentBox,
} from './styles';
import { MdDeleteForever } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

export default function BoardDetailContent() {
  const dummyData = [
    {
      createdAt: '2023-11-03T02:07:09.423Z',
      email: 'abc123@gmail.com',
      photoURL:
        'https://files.slack.com/files-pri/T043597JK8V-F066H5AP9AS/avatar.png',
      title: '삼의맹세',
      content:
        'JENNIE Vitae recusandae tenetur debitis impedit ut dolorem atque reprehenderit magnam. Cum dolor magnam commodi qui perferendis. Vel temporibus soluta. Eum delectus blanditiis. Neque dicta non quod ex. Maiores aspernatur fuga reprehenderit a magni eaque fuga voluptatum hic.',
      img: 'https://images.unsplash.com/photo-1700540291181-2d7be661477e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
      uid: '0',
    },
  ];
  return (
    <>
      {dummyData.map((data) => {
        return (
          <StAllContentBox key={data.uid}>
            <StAllContent>
              <StImg $src={data.img} />
              <StTitle>{data.title}</StTitle>
              <StContent>{data.content}</StContent>
            </StAllContent>
            <StBtn>
              <FaGithub size="30" />
              <MdDeleteForever size="30" />
            </StBtn>
          </StAllContentBox>
        );
      })}
    </>
  );
}
