import path from 'path';
import env from 'dotenv';
env.config({ path: path.resolve(__dirname, '../../.env') });

import { Engine } from '../engine';

Engine.provide();