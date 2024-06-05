import React, { useState } from "react";
import Card from "../../components/Card/Card";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";

interface Event {
  id: number;
  name: string;
  date: string;
  description: string;
  location: string;
  active: boolean;
  distance: number;
  price: number;
}

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
  justifyContent: "space-between",
};

const EventsPage: React.FC = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDistance, setEventDistance] = useState(0);
  const [eventPrice, setEventPrice] = useState(0);
  const [eventActive, setEventActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [eventData, setEventData] = useState<Event[]>([
    {
      id: 1,
      name: "Event 1",
      date: "2022-10-10",
      description: "Description 1",
      active: true,
      distance: 100,
      location: "Local 1",
      price: 50,
    },
    {
      id: 2,
      name: "Event 2",
      date: "2022-11-15",
      description: "Description 2",
      active: false,
      distance: 200,
      location: "Local 2",
      price: 100,
    },
    {
      id: 3,
      name: "Event 3",
      date: "2022-12-20",
      description: "Description 3",
      active: true,
      distance: 300,
      location: "Local 3",
      price: 150,
    },
  ]);

  const handleAddEvent = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleSave = () => {
    const newEvent = {
      name: eventName,
      date: eventDate,
      description: eventDescription,
      location: eventLocation,
      distance: eventDistance,
      price: eventPrice,
      active: eventActive,
    } as Event;
    setEventData([...eventData, newEvent]);
    console.log(newEvent);

    axios
      .post("https://sua-api.com/events", newEvent)
      .then((response) => {
        // Atualize a lista de eventos aqui
        setEventData([...eventData, response.data]);
        setOpen(false);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
    setOpen(false);
  };

  const handleEdit = (event: Event) => {
    setSelectedEvent(event);
    setEditOpen(true);
  };

  const handleEditSave = () => {
    if (selectedEvent) {
      const updatedEvents = [...eventData];
      const index = updatedEvents.findIndex(
        (event) => event.id === selectedEvent.id
      );
      if (index !== -1) {
        updatedEvents[index] = selectedEvent;
        setEventData(updatedEvents);
      }
    }
    setEditOpen(false);
  };

  return (
    <div style={containerStyle}>
      <Card>
        <div style={cardHeaderStyle}>
          <h2>Gestão de Eventos</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            onClick={handleAddEvent}
            fullWidth={false}
          >
            Criar Evento
          </Button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Localização</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Distância</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventData.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell>{event.location}</TableCell>
                <TableCell>{event.price}</TableCell>
                <TableCell>{event.distance}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(event)}>Editar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Adicionar Evento</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome do Evento"
            fullWidth
            onChange={(e) => setEventName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Data do Evento"
            fullWidth
            onChange={(e) => setEventDate(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Descrição"
            fullWidth
            onChange={(e) => setEventDescription(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Localização"
            fullWidth
            onChange={(e) => setEventLocation(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Distância"
            type="number"
            fullWidth
            onChange={(e) => setEventDistance(Number(e.target.value))}
          />
          <TextField
            margin="dense"
            label="Preço"
            type="number"
            fullWidth
            onChange={(e) => setEventPrice(Number(e.target.value))}
          />
          <FormControlLabel
            control={
              <Checkbox onChange={(e) => setEventActive(e.target.checked)} />
            }
            label="Ativo"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Editar Evento</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome do Evento"
            defaultValue={selectedEvent?.name}
            fullWidth
            onChange={(e) =>
              setSelectedEvent({
                ...selectedEvent,
                name: e.target.value,
              } as Event)
            }
          />
          <TextField
            margin="dense"
            label="Data do Evento"
            type="date"
            defaultValue={selectedEvent?.date}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) =>
              setSelectedEvent({
                ...selectedEvent,
                date: e.target.value,
              } as Event)
            }
          />
          <TextField
            margin="dense"
            label="Descrição"
            defaultValue={selectedEvent?.description}
            fullWidth
            onChange={(e) =>
              setSelectedEvent({
                ...selectedEvent,
                description: e.target.value,
              } as Event)
            }
          />
          <TextField
            margin="dense"
            label="Localização"
            defaultValue={selectedEvent?.location}
            fullWidth
            onChange={(e) =>
              setSelectedEvent({
                ...selectedEvent,
                location: e.target.value,
              } as Event)
            }
          />
          <TextField
            margin="dense"
            label="Distância"
            type="number"
            defaultValue={selectedEvent?.distance}
            fullWidth
            onChange={(e) =>
              setSelectedEvent({
                ...selectedEvent,
                distance: parseFloat(e.target.value),
              } as Event)
            }
          />
          <TextField
            margin="dense"
            label="Preço"
            type="number"
            defaultValue={selectedEvent?.price}
            fullWidth
            onChange={(e) =>
              setSelectedEvent({
                ...selectedEvent,
                price: parseFloat(e.target.value),
              } as Event)
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={selectedEvent?.active}
                onChange={(e) =>
                  setSelectedEvent({
                    ...selectedEvent,
                    active: e.target.checked,
                  } as Event)
                }
              />
            }
            label="Ativo"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleEditClose}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleEditSave}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EventsPage;
