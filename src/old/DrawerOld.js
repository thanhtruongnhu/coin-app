import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Input } from '@chakra-ui/input';
import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
} from '@chakra-ui/modal';

function DrawerOld( {click, btnRef}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const btnRef = React.useRef()
  
    return (
      <>
        {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button> */}
        <Drawer
          isOpen={click}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>
  
              <DrawerBody>
                <Input placeholder="Type here..." />
              </DrawerBody>
  
              <DrawerFooter>
                {/* <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button> */}
                <Button color="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }

export default DrawerOld;
