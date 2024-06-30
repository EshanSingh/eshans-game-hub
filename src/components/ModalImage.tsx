import {
  Modal,
  ModalOverlay,
  useDisclosure,
  Image,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  IconButton,
} from "@chakra-ui/react";

interface ModalImageProps {
  id: number;
  image: string;
  index: number;
}

const ModalImage = ({ image, id, index }: ModalImageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<Image key={id} src={image} />}
        aria-label={"displays image"}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ScreenShot {index}</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
        <ModalBody>
          <Image key={id} src={image} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalImage;
