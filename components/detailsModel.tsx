import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const DetailsForm = ({ modalBody = '', loomLink = '', gitHubLink = '', tryIt = '', children }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleLoomClick = () => {
    // Open Loom video link in a new tab
    window.open(loomLink, '');
  };

  const handleTryItClick = () => {
    // Open GitHub link in a new tab
    window.open(tryIt, '');
  };

  const handleGitHubClick = () => {
    // Open GitHub link in a new tab
    window.open(gitHubLink, '');
  };

  return (
    <>
      <Button onPress={onOpen} className="bg-[#d5b7ea]" variant="flat" color="secondary" radius="lg" size="sm">Details</Button>
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          radius="lg"
          classNames={{
            body: "py-6",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
            base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
            header: "border-b-[1px] border-[#292f46]",
            footer: "border-t-[1px] border-[#292f46]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }}
        >
          <ModalContent>
            {(onOpen) => (
              <>
                <ModalBody>
                  <p>
                    {modalBody}
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button className="bg-[#e2caeb] shadow-lg shadow-indigo-500/20" variant="light" onPress={handleLoomClick}>
                    Loom Video
                  </Button>
                  <Button className="bg-[#e2caeb] shadow-lg shadow-indigo-500/20" variant="light" onPress={handleTryItClick}>
                    Try It
                  </Button>
                  <Button className="bg-[#e2caeb] shadow-lg shadow-indigo-500/20" onPress={handleGitHubClick}>
                    GitHub
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
    </>
  );
};

export default DetailsForm;
