[![npm](https://img.shields.io/npm/dt/nest-request-id.svg)](https://img.shields.io/npm/dt/nest-request-id.svg)
[![npm version](https://badge.fury.io/js/nest-request-id.svg)](https://badge.fury.io/js/nest-request-id)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

# nest-request-id

RequestID middleware for Nest.js that adds an indentifier to the request and response.

## Installation

Run `npm i nest-request-id`

## Example

```
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RequestIdMiddleware } from 'nest-request-id';
import { CatsModule } from './cats/cats.module';

@Module({
imports: [CatsModule],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(RequestIdMiddleware)
            .forRoutes('cats');
    }
}
```

## License

[MIT License](https://opensource.org/licenses/MIT) © Ivan Vasiljevic
