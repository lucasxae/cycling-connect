import * as React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Rating,
} from "@mui/material";
import Card from "../../components/Card/Card";
import { useEffect } from "react";

interface Feedback {
  id: number;
  nome: string;
  nota: number;
  disponibilidadeFutura: string;
  statusFeedback: string;
  details: string;
}

const Feedbacks: React.FC = () => {
  const [feedbacks, setFeedbacks] = React.useState<Feedback[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/feedback", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") || "",
      },
    })
      .then((response) => response.json())
      .then((data) => setFeedbacks(data))
      .catch((error) => console.error("Erro ao buscar feedbacks:", error));
  }, []);

  const [open, setOpen] = React.useState(false);
  const [selectedFeedback, setSelectedFeedback] =
    React.useState<Feedback | null>(null);

  const handleClickOpen = (feedback: Feedback) => {
    setSelectedFeedback(feedback);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const containerStyle: React.CSSProperties = {
    whiteSpace: "nowrap",
    padding: "1rem",
    width: "100%",
    height: "100%",
  };
  const cardHeaderStyle: React.CSSProperties = {
    color: "#333",
    textAlign: "left",
    width: "100%",
    display: "flex",
  };
  // Aqui você pode adicionar a lógica para buscar os feedbacks

  return (
    <div style={containerStyle}>
      <Card>
        <div>
          <div style={cardHeaderStyle}>
            <h2>Feedbacks dos atletas</h2>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Nota</TableCell>
                  <TableCell>Disponibilidade Futura</TableCell>
                  <TableCell>Status do Feedback</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feedbacks.map((feedback) => (
                  <TableRow key={feedback.id}>
                    <TableCell>{feedback.id}</TableCell>
                    <TableCell>{feedback.nome}</TableCell>
                    <TableCell>{feedback.nota}</TableCell>
                    <TableCell>{feedback.disponibilidadeFutura}</TableCell>
                    <TableCell>{feedback.statusFeedback}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => handleClickOpen(feedback)}
                      >
                        Visualizar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ paddingTop: "0", paddingBottom: "0" }}>
          <div>
            <h3>Atleta: {selectedFeedback?.nome}</h3>
          </div>
        </DialogTitle>
        <DialogContent style={{ paddingTop: "0" }}>
          <div style={{ width: "500px" }}>
            <DialogContentText>
              <div>
                <h3>Nota do treino:</h3>
                <div
                  style={{
                    display: "block",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <Rating
                    name="read-only"
                    value={selectedFeedback?.nota}
                    size="large"
                    readOnly
                  />
                </div>
              </div>
              <h3>Comentário</h3>
              <Card>
                <div style={{ textAlign: "start" }}>
                  {selectedFeedback?.details}
                </div>
              </Card>
              <div>
                <h3>Diponibilidade futura</h3>
                <Card>
                  <div style={{ textAlign: "start" }}>
                    {selectedFeedback?.disponibilidadeFutura}
                  </div>
                </Card>
              </div>
            </DialogContentText>
          </div>
        </DialogContent>
        <DialogActions>
          <Button fullWidth onClick={handleClose} variant="contained">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Feedbacks;
