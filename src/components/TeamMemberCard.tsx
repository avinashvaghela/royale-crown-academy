import React from 'react';
import Icon from './Icon';

export default function TeamMemberCard({ name, role, specialisms, experience, approach, imagePlaceholder = true }) {
  return (
    <div className="flex flex-col rounded-md border border-surface-200 bg-background p-6 shadow-sm">
      {imagePlaceholder &&
      <div className="mb-5 flex aspect-square items-center justify-center rounded-md bg-surface-100">
          <Icon name="user" className="h-16 w-16 text-surface-300" />
        </div>
      }
      <h3 className="font-heading text-lg font-semibold text-foreground">{name}</h3>
      <p className="text-sm font-medium text-primary">{role}</p>
      {specialisms &&
      <div className="mt-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-surface-500">Specialisms</p>
          <p className="mt-1 text-sm text-surface-700">{specialisms}</p>
        </div>
      }
      {experience &&
      <div className="mt-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-surface-500">Experience</p>
          <p className="mt-1 text-sm text-surface-700">{experience}</p>
        </div>
      }
      {approach &&
      <div className="mt-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-surface-500">Approach</p>
          <p className="mt-1 text-sm text-surface-700">{approach}</p>
        </div>
      }
    </div>);

}