import { useState } from "react";
import { Button, Input } from "reactstrap";

const CreateTiendas = ({}) => {
  const [open, setOpen] = useState(false);
  const shopsToSelect = [];
  return (
    <div className="create-tienda">
      {open && (
        <div
          className="text-center"
          style={{ maxWidth: 400, margin: "0 auto" }}
        >
          <Input
            type="select"
            name="select"
            // onChange={(e) => {
            //   setShopName(e.target.value);
            // }}
            // value={shopName}
          >
            <option value="">Selecciona tienda...</option>
            {shopsToSelect.map((s, k) => {
              return (
                <option value={s.name} key={k}>
                  {s.name}
                </option>
              );
            })}
          </Input>
          <div className="mt-2">
            {" "}
            ó{" "}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
            >
              cancelar
            </a>
          </div>
        </div>
      )}
      {!open && (
        <div className="text-center">
          <Button
            color="primary"
            onClick={() => {
              setOpen(true);
            }}
          >
            <i className="fa fa-home me-2" />
            Nueva Tienda
          </Button>
        </div>
      )}
    </div>
  );
};

export default CreateTiendas;
