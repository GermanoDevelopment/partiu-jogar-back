import { School } from "../../modules/school/entities/school.entity";

export default class TestUtil {
  static giveMeAValidSchool(): School {
    const school = new School();

    school.name = 'Escola Bonanca';
    school.address = 'Pipipipopopo';
    school.location = 'Perto dali';
    school.court = [];
    school.supervisors = [];
    school.main = null;
    school.images = [];

    return school;
  }
}