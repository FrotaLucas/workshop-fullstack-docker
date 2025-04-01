FROM eclipse-temurin:21
RUN mkdir /opt/src
COPY . /opt/src
WORKDIR /opt/src

RUN ./gradlew bootJar

EXPOSE 8080
CMD ["java", "-jar", "/opt/src/build/libs/demo-0.0.1-SNAPSHOT.jar"]