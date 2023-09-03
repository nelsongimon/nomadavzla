"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ButtonsList() {
  return (
    <>
      <Container>
        <h2 className="mt-10 text-3xl font-bold">Default</h2>
        <div className="flex gap-2 mt-5">
          <Button
            label="Click me!"
            onClick={() => { }}
            size="default"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="default"
            variant="secondary"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="default"
            variant="outline"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="default"
            variant="ghost"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="default"
            variant="gray"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="default"
            variant="link"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="default"
            variant="white"
          />
        </div>
      </Container>
      <Container>
        <h2 className="mt-10 text-3xl font-bold">Small</h2>
        <div className="flex gap-2 mt-5">
          <Button
            label="Click me!"
            onClick={() => { }}
            size="small"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="small"
            variant="secondary"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="small"
            variant="outline"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="small"
            variant="ghost"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="small"
            variant="gray"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="small"
            variant="link"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="small"
            variant="white"
          />
        </div>
      </Container>
      <Container>
        <h2 className="mt-10 text-3xl font-bold">Large</h2>
        <div className="flex gap-2 mt-5">
          <Button
            label="Click me!"
            onClick={() => { }}
            size="large"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="large"
            variant="secondary"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="large"
            variant="outline"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="large"
            variant="ghost"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="large"
            variant="gray"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="large"
            variant="link"
          />
          <Button
            label="Click me!"
            onClick={() => { }}
            size="large"
            variant="white"
          />
        </div>
      </Container>
    </>
  );
}
