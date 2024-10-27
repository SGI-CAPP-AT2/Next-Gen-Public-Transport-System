import { InfoIcon } from '@primer/octicons-react';
import {
  Avatar,
  AvatarStack,
  Box,
  IconButton,
  Text,
  Link,
} from '@primer/react';
import { useModal } from '../hooks/useModal';
import { Dialog } from './Dialog';
const InfoBtnDialog = () => {
  const { open, close, isOpen } = useModal();
  return (
    <>
      <IconButton icon={InfoIcon} onClick={open} />
      <Dialog isOpen={isOpen} onDismiss={close} aria-labelledby="header-id">
        <Dialog.Header id="header-id">Project Details</Dialog.Header>
        <Box p={3}>
          <Text>
            This is Project created at{' '}
            <strong>Vishwakarma Institute of Technology, Pune</strong> towards
            fullfillment of Third Semester of CSAI
            <strong>Computer Engineering</strong>
            <AvatarStack alignRight>
              <Link href="https://github.com/SGI-CAPP-AT2">
                <Avatar
                  alt="Shubham Ingale"
                  src="https://avatars.githubusercontent.com/SGI-CAPP-AT2"
                />
              </Link>
            </AvatarStack>
          </Text>
        </Box>
      </Dialog>
    </>
  );
};
export default InfoBtnDialog;
