import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Link } from '@mui/material';
import {useMediaQuery, useTheme} from '@mui/material';
import { PaperTemplateProps } from './PaperTemplate';


interface PaperTableProps {
    papers: PaperTemplateProps[];
    }

const PaperTable: React.FC<PaperTableProps> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [selectedAbstract, setSelectedAbstract] = useState('');

  const handleClickOpen = (abstract: string) => {
    setSelectedAbstract(abstract);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAbstract('');
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Abstract</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.papers.map((paper, index) => (
            <TableRow key={index}>
              <TableCell>{paper.title}</TableCell>
              <TableCell>{paper.author}</TableCell>
              <TableCell>
                <Link href={paper.url} target="_blank" rel="noopener noreferrer">
                  {isMobile ? 'Link' : paper.url}
                </Link>
              </TableCell>
              <TableCell>{paper.categories}</TableCell>
              <TableCell onClick={() => handleClickOpen(paper.abstract)} sx={{cursor: "pointer", 
                    ":hover": {background: "lightgray"}}} >
                    View Abstract
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* Dialog for Abstract */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Abstract</DialogTitle>
        <DialogContent>
          <Typography>{selectedAbstract}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default PaperTable;
