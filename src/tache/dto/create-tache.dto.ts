/* eslint-disable prettier/prettier */
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { UserRole } from 'src/enum/UserRole';
export class CreateTacheDto {
    @IsOptional()
    @IsString()
    tachR: UserRole;
    @IsOptional()
    @IsBoolean()
    isUrgent: boolean;
    

}
