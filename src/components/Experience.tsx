import { Card, CardContent } from "./ui/card";
import "../css/experience.css";
import bluestocks from "../../src/images/bluestocks.png";
import Eu from "../images/Eu.png";
import ngtr from "../images/ngtr.png";
import spring from "../images/spring.png";

export function Experience() {
  const images = [bluestocks, Eu, spring, ngtr];

  return (
    <section id="experience" className="py-20 experience-bg ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">
            Work Experience as Intern 
          </h2>

          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            My professional journey and the impact I've made at different organizations.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">

            {images.map((img, index) => (
              <Card
                key={index}
                className="w-full max-w-sm h-64 bg-transparent shadow-none border-none"
              >
                <CardContent className="h-full flex items-center justify-center">
                  
                  {/* IMAGE BOX */}
                  <div className="w-40 h-40 flex items-center justify-center">
                    <img
                      src={img}
                      alt={`Experience ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
