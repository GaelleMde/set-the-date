import { useNavigate } from "react-router-dom";
import service from "../services/service.config";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AddEventPage() {
  const [isUploading, setIsUploading] = useState(false);

  const navigate = useNavigate();

  const [ImageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentChampion, setCurrentChampion] = useState("");
  const [category, setCategory] = useState("WTA");
  const [surface, setSurface] = useState("");
  const [level, setLevel] = useState("");
  const [prizeMoney, setPrizeMoney] = useState("");

  const handleFileUpload = async (event) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    if (!event.target.files[0]) {
      // to prevent accidentally clicking the choose file button and not selecting a file
      return;
    }

    setIsUploading(true);

    const uploadData = new FormData(); // images and other files need to be sent to the backend in a FormData
    uploadData.append("image", event.target.files[0]);

    try {
      const response = await service.post(
        "http://localhost:5006/api/upload",
        uploadData
      );
      // !IMPORTANT: Adapt the request structure to the one in your proyect (services, .env, auth, etc...)

      setImageUrl(response.data.ImageUrl);
      //                          |
      //     this is how the backend sends the image to the frontend => res.json({ imageUrl: req.file.path });

      setIsUploading(false); // to stop the loading animation
    } catch (error) {
      navigate("/error");
    }
  };

  const handleAddEventSubmit = async (e) => {
    e.preventDefault();

    const newEventData = {
      ImageUrl,
      name,
      city,
      location,
      country,
      startDate,
      endDate,
      currentChampion,
      category,
      surface,
      level,
      prizeMoney,
    };

    try {
      const addEventResponse = await service.post(`/event`, newEventData);
      navigate("/confirmation");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-form-page">
      <Form onSubmit={handleAddEventSubmit} className="edit-form">
        <h3>Add a new tournament</h3>

        <Row >
          <Col xs={12} md={8} >
            <Form.Group className="mb-3">
              <Form.Label>Tournament's name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={4}  >
            <Form.Group className="mb-3">
              <Form.Label>Category:</Form.Label>
              <Form.Select
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="WTA">WTA</option>
                <option value="ATP">ATP</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={8} md={4}>
            <Form.Group className="mb-3">
              <Form.Label>City:</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Country:</Form.Label>
              <Form.Control
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Location:</Form.Label>
              <Form.Control
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Start date:</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>End Date:</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
         
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Surface:</Form.Label>
              <Form.Select
                type="text"
                value={surface}
                onChange={(e) => setSurface(e.target.value)}
              >
                <option value="Hard">Hard</option>
                <option value="Clay">Clay</option>
                <option value="Grass">Grass</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Level:</Form.Label>
              <Form.Select
                type="text"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="Grand Slam">Grand Slam</option>
                <option value="1000">1000</option>
                <option value="500">500</option>
                <option value="250">250</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

<Row>
   <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Current champion</Form.Label>
              <Form.Control
                type="text"
                value={currentChampion}
                onChange={(e) => setCurrentChampion(e.target.value)}
              />
            </Form.Group>
          </Col>
   <Col xs={12} md={6}>
        <Form.Group className="mb-3">
          <Form.Label>Prize Money:</Form.Label>
          <Form.Control
            type="number"
            value={prizeMoney}
            onChange={(e) => setPrizeMoney(e.target.value)}
          />
        </Form.Group>
</Col>

</Row>

        <Form.Group className="mb-3">
          <Form.Label>Picture:</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleFileUpload}
            disabled={isUploading}
          />
         
        </Form.Group>
        
         

        {isUploading && (
          <div className="mt-2 text-muted">Uploading image...</div>
        )}

        {ImageUrl && (
          <div className="mt-3" style={{ textAlign: 'center' }} >
            <img
              src={ImageUrl}
              alt="uploaded"
              width={200}
              style={{ borderRadius: 8 }}
            />
          </div>
        )}
<div className="div-button">
        <button type="submit"> Save tournament</button>
        </div>
      </Form>
    
    
    </div>
  );
}

export default AddEventPage;
