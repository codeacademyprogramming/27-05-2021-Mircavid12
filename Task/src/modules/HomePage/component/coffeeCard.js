import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CoffeeCard({ coffee, key }) {
  console.log(coffee);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="col-lg-3 mt-4" key={key}>
      <div
        className="card"
        style={{ backgroundColor: "#EEE2DC", color: "#123c69", height: "63vh" }}
      >
        <img
          className="card-img-top"
          style={{ width: "18rem", maxHeight: "9rem", maxWidth: "100%" }}
          src={coffee.img}
          alt={coffee.name}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: 900 }}>
            {coffee.name}
          </h5>
          <p className="card-text text-muted">
            <span style={{ color: "#123c69", fontWeight: 700 }}>
              Ingredients:
            </span>
            {coffee.ingredients.map((ingredient) => ` ${ingredient} `)}
          </p>
          <p
            className="text-muted"
            style={{ fontWeight: 700 }}
          >{`${coffee.price.toFixed(2)} AZN`}</p>
          <button
            onClick={(e) => handleOpen(e)}
            type="button"
            className="btn"
            style={{ backgroundColor: "#2e151b", color: "white" }}
          >
            Order
          </button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
              <img
          className="card-img-top"
          style={{ width: "18rem", maxHeight: "9rem", maxWidth: "100%" }}
          src={coffee.img}
          alt={coffee.name}
        />
                <h2 id="transition-modal-title">{coffee.name}</h2>
                <p id="transition-modal-description">
                  {`Qiyməti: ${(coffee.price).toFixed(2)} AZN`}
                </p>
                <button
            type="button"
            className="btn"
            style={{ backgroundColor: "#2e151b", color: "white" }}
          >
            Order
          </button>
              </div>
            </Fade>
          </Modal>
        </div>
      </div>
    </div>
  );
}
