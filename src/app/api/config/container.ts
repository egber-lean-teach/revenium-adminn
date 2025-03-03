import { container } from "tsyringe";
import { OrganizationService } from "../services/organization.service";
import { OrganizationRepository } from "../repositories/organization.repository";

container.registerSingleton<OrganizationService>(OrganizationService);
container.registerSingleton<OrganizationRepository>(OrganizationRepository);
