/**
 * MIT License
 *
 * Copyright (c) 2025 Qiu Yixiang
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import Card from "@/components/ui/Card";
import Paragraph from "@/components/ui/Paragraph";
import { Title } from "@/components/ui/Title";
import { _MongoDBPart, _PostgreSQLPart } from "./_Part";

const SQLDatabaseSection = (): React.ReactNode => {
  const _Intro = (): React.ReactNode => {
    return (
      <div>
        <Title>SQL Database</Title>
        <Paragraph>
          SQL is a Structured Query Language that is used to manage relational
          databases. It is a standard language for managing relational
          databases.
        </Paragraph>
      </div>
    );
  };
  return (
    <Card>
      <_Intro />
      <_PostgreSQLPart />
    </Card>
  );
};

const NoSQLDatabaseSection = (): React.ReactNode => {
  const _Intro = (): React.ReactNode => {
    return (
      <div>
        <Title>NoSQL Database</Title>
        <Paragraph>
          NoSQL is a non-relational database that is used to manage
          non-relational databases like MongoDB, Cassandra, and etc. Which is
          more flexible and easy to use.
        </Paragraph>
      </div>
    );
  };
  return (
    <Card>
      <_Intro />
      <_MongoDBPart />
    </Card>
  );
};

const IntroSection = (): React.ReactNode => {
  return (
    <Card>
      <div>
        <Title>Database Roadmap</Title>
        <Paragraph>
          Database is the core of the backend development. It is used to store
          and retrieve data from the database. Make the data persistent and
          accessible.
        </Paragraph>
        <Paragraph>
          The roadmap is divided into two parts: SQL and NoSQL. You can choose
          to use SQL or NoSQL as your database. Like for use{" "}
          <strong>MongoDB</strong> as NoSQL database, and use{" "}
          <strong>MySQL</strong> or <strong>PostgreSQL</strong> as SQL database.
        </Paragraph>
        <Paragraph>
          You don't need to follow exactly the same order - you can skip topics
          that you already know.
        </Paragraph>
      </div>
    </Card>
  );
};

const DataBasePage = (): React.ReactNode => {
  return (
    <div className="flex flex-col gap-8">
      <IntroSection />
      <SQLDatabaseSection />
      <NoSQLDatabaseSection />
    </div>
  );
};

export default DataBasePage;
