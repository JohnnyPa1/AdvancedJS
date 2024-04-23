import Carte from "../../curs1/carte.js";

// import {Carte} from '../js/Carte.js';
import { Carte as MyBook } from "../modules/Carte.js";

let carte = new Carte("Poezii", "Mihai Eminescu", "Polirom", 2007, 25);
carte.deschidCartea();
let mycarte = new MyBook("Poezii", "Mihai Eminescu", "Polirom", 2007, 25);
mycarte.deschidCartea();