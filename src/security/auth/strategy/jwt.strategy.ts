/* eslint-disable prettier/prettier */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${process.env.PUBLIC_KEY}`,
      algorithms: ['RS256'],
    });
    console.log(process.env.PUBLIC_KEY.replace(/\\\\n/gm, '\\n'))
  }
 

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }

 
}