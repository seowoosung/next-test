import { MessageContext } from "@/lib/contexts/message-provider";
import { getFileExtension } from "@/lib/utils";
import { PlusOutlined } from "@ant-design/icons";
import { Upload as BaseUpload } from "antd";
import { RcFile, UploadChangeParam, UploadProps } from "antd/lib/upload";
import React, { useContext, useState } from "react";
import styled from "styled-components";

const Upload = styled(BaseUpload)`
  &&& {
    width: fit-content;
    .ant-upload-select {
      background: #f9f9f9;
      overflow: hidden;
      width: 75px !important;
      height: 75px !important;
    }
  }
`;
const CMaxSize = 100;
interface IImageInfo {
  src: string | undefined;
  extension: string | undefined;
}
type IImageUploadProps = UploadProps;
export const ImageUpload: React.FC<IImageUploadProps> = ({ ...rest }) => {
  const [image, setImage] = useState<IImageInfo>({ src: undefined, extension: undefined });
  const { messageApi } = useContext(MessageContext);

  const beforeUpload = (file: RcFile) => {
    const isValid = file.size / 1024 / 1024 < CMaxSize;
    if (!isValid) {
      messageApi.error("이미지가 용량을 초과했습니다.");
    }
    return isValid;
  };

  const handleChange = async (info: UploadChangeParam) => {
    if (info.file.status !== "done") return;

    rest.onChange?.(info);
    const src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(info.file.originFileObj as Blob);
      reader.onload = () => resolve(reader.result as string);
    });
    setImage({
      src: String(src),
      extension: getFileExtension(info.file.name),
    });
  };

  return (
    <Upload
      method={"get" as any}
      {...rest}
      data-testid="image-upload"
      maxCount={1}
      listType="picture-card"
      showUploadList={false}
      withCredentials={true}
      onChange={handleChange}
      beforeUpload={beforeUpload}
    >
      {image.src ? (
        <img src={image.src} />
      ) : (
        <div>
          <PlusOutlined />
        </div>
      )}
    </Upload>
  );
};
