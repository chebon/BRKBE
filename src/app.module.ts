import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { Property } from './property/entities/property.entity';
import { PhotosModule } from './photos/photos.module';
import { AmenitiesModule } from './amenities/amenities.module';
import { AgentsModule } from './agents/agents.module';
import { AgencyModule } from './agency/agency.module';
import { LeadsModule } from './leads/leads.module';
import { PartnersModule } from './partners/partners.module';
import { Photo } from './photos/entities/photo.entity';
import { Amenity } from './amenities/entities/amenity.entity';
import { Agency } from './agency/entities/agency.entity';
import { Agent } from './agents/entities/agent.entity';
import { Lead } from './leads/entities/lead.entity';
import { Partner } from './partners/entities/partner.entity';

@Module({
  imports: [PropertyModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: "postgres",
        username: "ppturumpovuyme",
        password: "04bc3e03830b1f7321ea5c6403d2b30938b032870871120a4eab2b0099c31550",
        database: "de8kvadd6mpbdi",
        entities: [Property, Photo, Amenity, Agency, Agent, Lead, Partner],
        synchronize: true,
        logging: true,
        "ssl": true,
        "extra": {
          "ssl": {
            "rejectUnauthorized": false
          }
        },
        logger: "advanced-console",
        retryAttempts: 3,
        port: 5432,
        //host: 'localhost'
        host: 'ec2-34-253-116-145.eu-west-1.compute.amazonaws.com'

      })
    }),
    PhotosModule,
    AmenitiesModule,
    AgentsModule,
    AgencyModule,
    LeadsModule,
    PartnersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
