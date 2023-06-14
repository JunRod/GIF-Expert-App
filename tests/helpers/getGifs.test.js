import { getGifs } from "../../src/helpers/getGifs";

describe("Probando el script getGifs", () => {

    test("Debe retornar un arreglo de gifs", async () => { 
        
        const gifs = await getGifs("One Punch");
      
        //Lo que espera: 0; ¿Es mayor a 0?
        expect(gifs.length).toBeGreaterThan(0);
      
        expect(gifs[0]).toEqual({
          id: expect.any(String),
          title: expect.any(String),
          url: expect.any(String),
        });

     })
});
