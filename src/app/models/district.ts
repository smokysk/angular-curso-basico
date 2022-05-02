import { City } from "./city";

export class District {
  id!: number;
  name!: string;
  zone!: number | Zone;
  zone_name!: string;
  city!: number | City
  city_name!: string;
}
