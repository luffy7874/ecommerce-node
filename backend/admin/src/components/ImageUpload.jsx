import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

export const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

export const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

export const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

export const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isFocused) {
      return '#2196f3';
  }
  return '#eeeeee';
}

export const DropzoneContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;


export const Thumbnails = ({ files }) => {
    return (
        <>
            {files.map(file => {
                return(
                    <div style={thumb} key={file.name}>
                        <div style={thumbInner}>
                            <img
                                src={file.preview}
                                style={img}
                                alt='thumbnail'
                                // Revoke data uri after image is loaded
                                onLoad={() => { URL.revokeObjectURL(file.preview) }}
                            />
                            { file.path }
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export const SingleThumbnail = ({ file }) => {
    return (
        <div style={thumb} key={file}>
            <div style={thumbInner}>
                <img
                    src={file}
                    style={img}
                    alt='thumbnail'
                    onLoad={() => { URL.revokeObjectURL(file) }}
                />
            </div>  
        </div>
    );
}